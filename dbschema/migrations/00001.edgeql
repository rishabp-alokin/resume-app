CREATE MIGRATION m1re3syymr2w7faeqvzim6jj2ib6aetavg72xl6nisggjznlwvwbua
    ONTO initial
{
  CREATE TYPE default::basic_details {
      CREATE REQUIRED PROPERTY designation: std::str;
      CREATE REQUIRED PROPERTY email: std::str;
      CREATE REQUIRED PROPERTY name: std::str;
      CREATE REQUIRED PROPERTY phone: std::str;
      CREATE REQUIRED PROPERTY summary: std::str;
  };
  CREATE TYPE default::address {
      CREATE REQUIRED LINK basic_details: default::basic_details;
      CREATE REQUIRED PROPERTY address: std::str;
      CREATE REQUIRED PROPERTY city: std::str;
      CREATE REQUIRED PROPERTY country: std::str;
      CREATE REQUIRED PROPERTY current_location: std::str;
      CREATE REQUIRED PROPERTY postal_code: std::str;
      CREATE REQUIRED PROPERTY state: std::str;
  };
  CREATE TYPE default::certifications {
      CREATE REQUIRED LINK basic_details: default::basic_details;
      CREATE REQUIRED PROPERTY certification_name: std::str;
      CREATE REQUIRED PROPERTY certification_url: std::str;
  };
  CREATE TYPE default::education {
      CREATE REQUIRED LINK basic_details: default::basic_details;
      CREATE REQUIRED PROPERTY course: std::str;
      CREATE REQUIRED PROPERTY institution: std::str;
      CREATE REQUIRED PROPERTY marks: std::int32;
      CREATE REQUIRED PROPERTY passout_year: std::int16;
  };
  CREATE TYPE default::languages {
      CREATE REQUIRED LINK basic_details: default::basic_details;
      CREATE REQUIRED PROPERTY language: std::str;
      CREATE REQUIRED PROPERTY proficiency: std::str;
  };
  CREATE TYPE default::skills {
      CREATE REQUIRED LINK basic_details: default::basic_details;
      CREATE REQUIRED PROPERTY skill: std::str;
  };
  CREATE TYPE default::social_media {
      CREATE REQUIRED LINK basic_details: default::basic_details;
      CREATE REQUIRED PROPERTY platform: std::str;
      CREATE REQUIRED PROPERTY url: std::str;
  };
  CREATE TYPE default::work_experience {
      CREATE REQUIRED LINK basic_details: default::basic_details;
      CREATE REQUIRED PROPERTY company: std::str;
      CREATE REQUIRED PROPERTY designation: std::str;
      CREATE REQUIRED PROPERTY joining_date: std::datetime;
      CREATE REQUIRED PROPERTY worked_till: std::datetime;
  };
  CREATE TYPE default::projects {
      CREATE REQUIRED LINK person: default::basic_details;
      CREATE REQUIRED PROPERTY description: std::str;
      CREATE REQUIRED PROPERTY title: std::str;
  };
};
