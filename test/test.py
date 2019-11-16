import unittest
import sys
import os
sys.path.append(os.getcwd())
from modules import shorten_url, shorten_urls


class TestShortenUrlNormal(unittest.TestCase):

    def test_shorten_url_gp(self):
        url = 'https://www.amazon.co.jp/gp/product/B00TEY2W72/'
        actual = shorten_url(url)
        expect = 'https://amazon.jp/dp/B00TEY2W72/'
        self.assertEqual(actual, expect)

    def test_shorten_url_old_style(self):
        url = 'https://www.amazon.co.jp/exec/obidos/ASIN/B00TEY2W72/'
        actual = shorten_url(url)
        expect = 'https://amazon.jp/dp/B00TEY2W72/'
        self.assertEqual(actual, expect)

    def test_shorten_url_old_style_short(self):
        url = 'https://www.amazon.co.jp/o/ASIN/B00TEY2W72/'
        actual = shorten_url(url)
        expect = 'https://amazon.jp/dp/B00TEY2W72/'
        self.assertEqual(actual, expect)

    def test_shorten_url_dp_digit_asin(self):
        url = 'https://www.amazon.co.jp/3%E5%88%86LifeHacking-%E5%B1%B1%E5%8F%A3-%E7%9C%9F%E5%BC%98/dp/4797340266/'
        actual = shorten_url(url)
        expect = 'https://amazon.jp/dp/4797340266/'
        self.assertEqual(actual, expect)

    def test_shorten_url_dp_non_slash_end(self):
        url = 'https://www.amazon.co.jp/%E4%BD%9C%E3%81%A3%E3%81%A6%E3%82%8F%E3%81%8B%E3%82%8B-%E3%82%A2%E3%83%B3%E3%82%B5%E3%83%B3%E3%83%96%E3%83%AB%E5%AD%A6%E7%BF%92%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0%E5%85%A5%E9%96%80-%E5%9D%82%E6%9C%AC%E4%BF%8A%E4%B9%8B-ebook/dp/B07SC6HJMY'
        actual = shorten_url(url)
        expect = 'https://amazon.jp/dp/B07SC6HJMY/'
        self.assertEqual(actual, expect)

    def test_shorten_url_already_short(self):
        url = 'https://amazon.jp/dp/B07SC6HJMY/'
        actual = shorten_url(url)
        expect = 'https://amazon.jp/dp/B07SC6HJMY/'
        self.assertEqual(actual, expect)


class TestShortenUrlAbnormal(unittest.TestCase):

    def test_shorten_url_empty(self):
        url = ''
        with self.assertRaises(ValueError):
            shorten_url(url)


class TestShortenUrlsNormal(unittest.TestCase):

    def test_shorten_urls(self):
        url = 'https://www.amazon.co.jp/3%E5%88%86LifeHacking-%E5%B1%B1%E5%8F%A3-%E7%9C%9F%E5%BC%98/dp/4797340266/'
        url += 'https://www.amazon.co.jp/o/ASIN/B00TEY2W72/'
        url += 'https://amazon.jp/dp/4797340266/'
        actual = shorten_urls(url)
        expect = [
            'https://amazon.jp/dp/4797340266/',
            'https://amazon.jp/dp/B00TEY2W72/',
            'https://amazon.jp/dp/4797340266/'
        ]
        self.assertEqual(actual, expect)


if __name__ == '__main__':
    unittest.main()
