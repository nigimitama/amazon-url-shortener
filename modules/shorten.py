import re


def shorten_urls(url: str, short_domain=True) -> list:
    urls = _split_url(url)
    short_urls = []
    for url in urls:
        url = shorten_url(url, short_domain=short_domain)
        short_urls.append(url)
    return short_urls


def shorten_url(url: str, short_domain=True) -> str:
    if (url is None) or (url == ''):
        return None
    domain = _get_domain(url, short_domain=short_domain)

    try:
        asin = _get_asin(url)
        short_url = domain + asin + '/'
    except ValueError:
        short_url = 'failed'
    return short_url


def _get_domain(url: str, short_domain=True):
    domain = re.search(r'(https://.*amazon[\w\.]+/)', url)
    if domain:
        domain = domain.group()
        if short_domain:
            domain = domain.replace('www.', '').replace('.co', '')
    else:
        domain = 'https://amazon.com/'
    return re.sub(r'/$', '', domain)


def _get_asin(url: str):
    has_gp = re.search(r'(/gp/product/[\d\w]+)', url)
    if has_gp:
        url = url.replace('/gp/product/', '/dp/')
    has_asin = re.search(r'(/ASIN/[\d\w]+)', url)
    if has_asin:
        url = url.replace('/ASIN/', '/dp/')
    has_dp = re.search(r'(/dp/[\d\w]+)', url)
    if has_dp:
        asin = has_dp.group()
    else:
        raise ValueError('ASIN not found')
    return asin


def _split_url(url: str) -> list:
    """split url string by http:// or https://"""
    url = re.sub("http.{0,1}://", "https://", url)
    urls = url.split('https://')
    urls = ['https://'+url for url in urls if url != '']
    return urls
