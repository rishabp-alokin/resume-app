CREATE MIGRATION m14rplrk5pjqn66pyx7dj3lionng7wpynh54zrbs5t5puddv45iiwq
    ONTO m1m2sc2hutjykxwdxv7tndz3c3y4ayu2b6d5vlsofpg5xqcftqgtdq
{
  ALTER TYPE default::address {
      DROP LINK basic_details;
  };
  ALTER TYPE default::certifications {
      DROP LINK basic_details;
  };
  ALTER TYPE default::education {
      DROP LINK basic_details;
  };
  ALTER TYPE default::languages {
      DROP LINK basic_details;
  };
  ALTER TYPE default::projects {
      DROP LINK person;
  };
  ALTER TYPE default::skills {
      DROP LINK basic_details;
  };
  ALTER TYPE default::social_media {
      DROP LINK basic_details;
  };
  ALTER TYPE default::work_experience {
      DROP LINK basic_details;
  };
};
