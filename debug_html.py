import requests
from bs4 import BeautifulSoup

url = "https://github.com/trending?since=daily"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}
response = requests.get(url, headers=headers)
soup = BeautifulSoup(response.text, 'html.parser')
repo = soup.find('article', class_='Box-row')
if repo:
    # Print the last div which usually contains the stats
    f6_div = repo.find('div', class_='f6')
    if f6_div:
        print(f6_div.prettify())
    else:
        print("No f6 div found")
else:
    print("No repo found")
