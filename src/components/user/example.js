const example1 = (multer) => (num) => num * multer;

const example2 = (multer) => {
  const mmulter = multer;
  (num) => num * mmulter;
};
