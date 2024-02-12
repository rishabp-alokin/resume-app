CREATE MIGRATION m1hldn5q3sz66jt64lpurzwek5qg6zwpkq6yiuq3juxtb5vxszzuhq
    ONTO m14rplrk5pjqn66pyx7dj3lionng7wpynh54zrbs5t5puddv45iiwq
{
  ALTER TYPE default::basic_details {
      ALTER LINK address {
          ON TARGET DELETE DELETE SOURCE;
      };
      ALTER LINK certifications {
          ON TARGET DELETE DELETE SOURCE;
      };
      ALTER LINK education {
          ON TARGET DELETE DELETE SOURCE;
      };
      ALTER LINK languages {
          ON TARGET DELETE DELETE SOURCE;
      };
      ALTER LINK projects {
          ON TARGET DELETE DELETE SOURCE;
      };
      ALTER LINK skills {
          ON TARGET DELETE DELETE SOURCE;
      };
      ALTER LINK social_media {
          ON TARGET DELETE DELETE SOURCE;
      };
      ALTER LINK work_experience {
          ON TARGET DELETE DELETE SOURCE;
      };
  };
};
