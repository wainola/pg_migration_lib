const unary = fn => (fn.length === 1 ? fn : arg => fn(arg));

const toLowerCase = item => item.toLowerCase();

const checkMigrationCreation = item => (item === "create" ? true : false);

const checkIfFormatIsSQL = item => (item === "sql" ? true : false);

const checkFileNameIsPassed = item => (item.length > 0 ? true : false);

const fileNameGenerator = item => {
  const timestamp = Date.now();
  const fileName = `${timestamp}_${item}`;
  return fileName;
};

module.exports = {
  unary,
  toLowerCase,
  checkMigrationCreation,
  checkIfFormatIsSQL,
  checkFileNameIsPassed,
  fileNameGenerator
};
