CREATE MIGRATION m1xpg7yex5anne5xnbof5slvbi4jsjxfz7x7ecitsqj5d6inw6vu5a
    ONTO m1hldn5q3sz66jt64lpurzwek5qg6zwpkq6yiuq3juxtb5vxszzuhq
{
  ALTER TYPE default::basic_details {
      ALTER LINK address {
          ON SOURCE DELETE DELETE TARGET;
          RESET ON TARGET DELETE;
      };
      ALTER LINK certifications {
          ON SOURCE DELETE DELETE TARGET;
          RESET ON TARGET DELETE;
      };
      ALTER LINK education {
          ON SOURCE DELETE DELETE TARGET;
          RESET ON TARGET DELETE;
      };
      ALTER LINK languages {
          ON SOURCE DELETE DELETE TARGET;
          RESET ON TARGET DELETE;
      };
      ALTER LINK projects {
          ON SOURCE DELETE DELETE TARGET;
          RESET ON TARGET DELETE;
      };
      ALTER LINK skills {
          ON SOURCE DELETE DELETE TARGET;
          RESET ON TARGET DELETE;
      };
      ALTER LINK social_media {
          ON SOURCE DELETE DELETE TARGET;
          RESET ON TARGET DELETE;
      };
      ALTER LINK work_experience {
          ON SOURCE DELETE DELETE TARGET;
          RESET ON TARGET DELETE;
      };
  };
};
