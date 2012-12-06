$data.Class.define("zipsdb.zip", $data.Entity, null, {
    _id: { type: "objectid", key: true, computed: true, nullable: false },
    zipcode: { type: "string" },
    city: { type: "string" },
    geoloc: { type: "Array", elementType: "number" },
    population: { type: "int" },
    state: { type: "string" }
}, null);
$data.Class.defineEx("zipsdb.Context", [$data.EntityContext,$data.ServiceBase], null, {
    zips: { type: $data.EntitySet, elementType: zipsdb.zip }
});
exports = zipsdb.Context;