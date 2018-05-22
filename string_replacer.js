const stringReplacer = (string, opts) => {

  Object.keys(opts).map((key) => {

    const placeholder = "__"+key.toUpperCase()+"__";

    string = string.replace(placeholder, opts[key]);

  });
  return string; 
}