function testMultiple() {
  var urls = 'https://www.amazon.co.jp/gp/product/B00TEY2W72/';
  urls += 'https://www.amazon.co.jp/exec/obidos/ASIN/B00TEY2W72/';
  urls += 'https://www.amazon.co.jp/o/ASIN/B00TEY2W72/';
  urls += 'https://www.amazon.co.jp/3%E5%88%86LifeHacking-%E5%B1%B1%E5%8F%A3-%E7%9C%9F%E5%BC%98/dp/4797340266/';
  urls += 'https://amazon.jp/dp/B07SC6HJMY/';
  urls += 'https://www.amazon.co.jp/%E7%AC%AC1%E8%A9%B1-%E3%81%8A%E5%A7%89%E3%81%95%E3%81%BE%E3%81%A8%E5%91%BC%E3%81%B0%E3%81%9B%E3%81%A6%E3%81%8F%E3%81%A0%E3%81%95%E3%81%84%EF%BC%81/dp/B01L0JM8Z4/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&keywords=%E3%83%88%E3%83%83%E3%83%97%E3%82%92%E3%81%AD%E3%82%89%E3%81%882%EF%BC%81&qid=1561974990&s=instant-video&sr=1-1';
  urls += 'https://www.amazon.co.jp/%E5%8C%BB%E5%AD%A6%E8%AB%96%E6%96%87%E3%81%AE%E9%9B%A3%E8%A7%A3%E3%81%AA%E7%B5%B1%E8%A8%88%E6%89%8B%E6%B3%95%E3%81%8C%E6%89%8B%E3%81%AB%E5%8F%96%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%82%8F%E3%81%8B%E3%82%8B%E6%9C%AC-%E8%B6%85%E7%B5%B6%E8%A7%A3%E8%AA%AC-%E5%BA%B7%E6%B0%B8-%E7%A7%80%E7%94%9F/dp/4307004876';
  urls += 'https://www.amazon.co.jp/gp/product/4863542801/ref=ox_sc_saved_title_6?smid=AN1VRQENFRJN5&psc=1';
  actual = shortenUrls(urls);
  return actual;
}

document.write(testMultiple());
