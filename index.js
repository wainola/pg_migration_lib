const {
  unary,
  toLowerCase,
  checkMigrationCreation,
  checkIfFormatIsSQL,
  fileNameGenerator,
  checkFileNameIsPassed
} = require("./helpers");

module.exports = () => {
  console.log("PG MIGRATION TOOL");
  const args = process.argv.slice(2).map(unary(toLowerCase));
  const [typeMigration, nameMigration, formatMigration] = args;

  console.log(typeMigration, nameMigration, formatMigration);

  const isCreateArg = checkMigrationCreation(typeMigration);
  const isSQLArg = checkIfFormatIsSQL(formatMigration);
  const fileNamePassed = checkFileNameIsPassed(nameMigration);

  if (!isCreateArg) {
    // INCLUDE PROCESS EXIT
    console.log("doesnt create");
  }

  if (!isSQLArg) {
    console.log("specified format incorrect");
  }

  const fileName =
    isSQLArg && fileNamePassed
      ? `${fileNameGenerator(nameMigration)}.sql`
      : `${Date.now()}_empty.sql`;

  // TRIGGERS CREATION OF THE FILE

  console.log(fileName);
  console.log(args);
};
