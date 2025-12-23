import requests
from bs4 import BeautifulSoup
import json
import time

def scrape_github_trending():
    url = "https://github.com/trending?since=daily"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }

    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
    except requests.RequestException as e:
        print(f"Error fetching URL: {e}")
        return

    soup = BeautifulSoup(response.text, 'html.parser')
    repos = soup.find_all('article', class_='Box-row')
    
    ai_keywords = ['ai', 'llm', 'gpt', 'model', 'agent', 'rag', 'diffusion', 'transformer', 'cursor', 'copilot', 'bot', 'vision']
    news_data = []

    print(f"Found {len(repos)} repositories. Filtering for AI content...")

    for repo in repos:
        # Extract Name and URL
        h2 = repo.find('h2', class_='h3 lh-condensed')
        if h2 and h2.find('a'):
            a_tag = h2.find('a')
            relative_url = a_tag['href'].strip()
            # Remove leading slash if present for name
            name = relative_url.lstrip('/')
            repo_url = f"https://github.com{relative_url}"
        else:
            continue

        # Extract Description
        p = repo.find('p', class_='col-9 color-fg-muted my-1 pr-4')
        description = p.text.strip() if p else "No description available."

        # Extract Language
        language_span = repo.find('span', itemprop='programmingLanguage')
        language = language_span.text.strip() if language_span else "Unknown"

        # Extract Stars Today
        stars_today_text = repo.find(string=lambda text: text and 'stars today' in text)
        if stars_today_text:
            stars_today = stars_today_text.strip().replace(' stars today', '').replace(',', '')
        else:
            stars_today = "0"

        # Filter logic
        content_to_check = (name + " " + description).lower()
        if any(keyword in content_to_check for keyword in ai_keywords):
            news_item = {
                "title": name, # Mapping Name to title for frontend consistency
                "description": description,
                "language": language,
                "url": repo_url,
                "stars_today": stars_today,
                "source": "GitHub Trending",
                "category": "开源项目", # Default category
                "ai_summary": f"[AI速读] {description}",
                "time": "今日"
            }
            news_data.append(news_item)

    # Save to file
    output_file = 'daily-ai-tools/src/data/news_data.json'
    
    # Add id and ensure summary field exists for frontend compatibility
    for i, item in enumerate(news_data):
        item['id'] = str(i + 1)
        item['summary'] = item['ai_summary']

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(news_data, f, ensure_ascii=False, indent=2)

    print(f"Successfully scraped {len(news_data)} AI-related repositories.")
    print(f"Saved to {output_file}")

if __name__ == "__main__":
    scrape_github_trending()
