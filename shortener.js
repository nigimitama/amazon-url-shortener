function shortenUrls(url) {
  var urls = url.replace(/http.?:\/\//g, 'https://').split('https://');
  urls = urls.map(url => shortenUrl);
  return urls.join('\n');
}

function shortenUrl(url) {
  const domain = getDomain(url);
  const asin = getAsin(url);
  return domain + asin;
}


function getDomain(url) {
  var domain = url.match(/http.?:\/\/(www.)?amazon[\w\.]+\//g)[0];
  domain = domain.replace('www.', '').replace(/\/$/g, '');
  return domain;
}

function getAsin(url) {
  var url = url.replace(/\/gp\/product\//g, '/dp/').replace('/ASIN/', '/dp/');
  var asin = url.match(/\/dp\/[\d\w]+/g)[0];
  if (asin.search(/\/$/g) === -1) {
    asin += '/'; 
  }
  return asin;
}
