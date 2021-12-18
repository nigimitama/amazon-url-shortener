function shortenUrls(url) {
  var urls = url.replace(/http.?:\/\//g, 'https://').split('https://');
  urls = urls.filter(url => url !== '');
  urls = urls.map(url => shortenUrl('https://'+url));
  urls = urls.join('\n');
  return urls;
}


function shortenUrl(url) {
  const domain = getDomain(url);
  const asin = getAsin(url);
  if ((domain === null) || (asin === null)) {
    return null;
  } else {
    return domain + asin;
  } 
}

function getDomain(url) {
  var domain = url.match(/http.?:\/\/(www.)?amazon[\w\.]+\//g);
  if (domain !== null) {
    domain = domain[0].replace('www.', '').replace(/\/$/g, '');
  }  
  return domain;
}

function getAsin(url) {
  var asin;
  const isMobile = (url.match(/\/gp\/aw\/d\//g) !== null);
  if (isMobile) {
    asin = url.match(/\/gp\/aw\/d\/[\d\w]+/g);
  } else {
    url = url.replace(/\/gp\/product\//g, '/dp/').replace('/ASIN/', '/dp/');
    asin = url.match(/\/dp\/[\d\w]+/g);
  }
  if (asin !== null) {
    asin = asin[0];
    if (asin.search(/\/$/g) === -1) {
      asin += '/'; 
    }
  }
  return asin;
}
