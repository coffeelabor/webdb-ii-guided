//up are the changes to make to the schema
exports.up = function(knex) {
  return knex.schema.createTable("fruits", tbl => {
    tbl.increments();

    tbl
      .string("name", 128)
      .unique()
      .notNullable();
    tbl.decimal("avg-weight-oz");
  });

  //primary key, called id, autoincrements
};

//how we undo the changes made in the up function
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("fruits");
};
