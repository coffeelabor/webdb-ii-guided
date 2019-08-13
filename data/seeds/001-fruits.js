exports.seed = function(knex) {
  // Deletes ALL existing entries
  return (
    knex("fruits")
      // .del()
      .truncate()
      .then(function() {
        // Inserts seed entries
        return knex("fruits").insert([
          { name: "mango" },
          { name: "pineapple" },
          { name: "potato" }
        ]);
      })
  );
};
