const {
  unary,
  toLowerCase,
  checkMigrationCreation,
  chekcIfFormatIsSQL
} = require("./helpers");

module.exports = () => {
  console.log("PG MIGRATION TOOL");
  const args = process.argv.slice(2).map(unary(toLowerCase));
  const [typeMigration, nameMigration, formatMigration] = args;
  const isCreateArg = checkMigrationCreation(typeMigration);
  const isSQLArg = chekcIfFormatIsSQL(formatMigration);

  if (!isCreateArg) {
    // INCLUDE PROCESS EXIT
    console.log("doesnt create");
  }

  if (!isSQLArg) {
    console.log("specified format incorrect");
  }

  // TRIGGERS CREATION OF THE FILE

  console.log("creation");
  console.log(args);
};
