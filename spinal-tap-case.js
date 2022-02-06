function spinalCase(str) {
  return str.replace(/([A-Z])|(-)|(_)/g, ' $1').trim().toLowerCase().replace(/\s\s+/g,' ').split(' ').join('-');
}

spinalCase('This Is Spinal Tap');