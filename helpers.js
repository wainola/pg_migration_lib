const unary = fn => (fn.length === 1 ? fn : arg => fn(arg));

const toLowerCase = item => item.toLowerCase();

const checkMigrationCreation = item => (item === "create" ? true : false);

const chekcIfFormatIsSQL = item => (item === "sql" ? true : false);

const fileNameGenerator = item => {};

module.exports = {
  unary,
  toLowerCase,
  checkMigrationCreation,
  chekcIfFormatIsSQL,
  fileNameGenerator
};
