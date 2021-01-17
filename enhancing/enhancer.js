module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if(item.enhancement < 20) {
    return {...item, enhancement: item.enhancement + 1};
  } else {
    return item;
  }
};

function fail(item) {
  const ie = item.enhancement
  if( ie < 15 ) {
    return { ...item, enhancement: ie - 5}
  } else if ( ie >= 15 && ie <= 16) {
    return { ...item, enhancement: ie -10 }
  } else {
    return { ...item, enhancement: ie - 1}
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
