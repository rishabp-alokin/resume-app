CREATE MIGRATION m1m2sc2hutjykxwdxv7tndz3c3y4ayu2b6d5vlsofpg5xqcftqgtdq
    ONTO m17cnbl6ez4x5ibus5a2pq4k4btonly74uftvv5hcohc2zx2auij6q
{
  ALTER TYPE default::address {
      ALTER PROPERTY address {
          RESET OPTIONALITY;
      };
      ALTER PROPERTY city {
          RESET OPTIONALITY;
      };
      ALTER PROPERTY country {
          RESET OPTIONALITY;
      };
      ALTER PROPERTY postal_code {
          RESET OPTIONALITY;
      };
      ALTER PROPERTY state {
          RESET OPTIONALITY;
      };
  };
  ALTER TYPE default::basic_details {
      ALTER PROPERTY template_design_type {
          SET REQUIRED USING (<std::str>{});
      };
  };
  ALTER TYPE default::certifications {
      ALTER PROPERTY certification_name {
          RESET OPTIONALITY;
      };
      ALTER PROPERTY certification_url {
          RESET OPTIONALITY;
      };
  };
  ALTER TYPE default::education {
      ALTER PROPERTY course {
          RESET OPTIONALITY;
      };
      ALTER PROPERTY institution {
          RESET OPTIONALITY;
      };
      ALTER PROPERTY marks {
          RESET OPTIONALITY;
      };
      ALTER PROPERTY passout_year {
          RESET OPTIONALITY;
      };
  };
  ALTER TYPE default::languages {
      ALTER PROPERTY language {
          RESET OPTIONALITY;
      };
      ALTER PROPERTY proficiency {
          RESET OPTIONALITY;
      };
  };
  ALTER TYPE default::projects {
      ALTER PROPERTY description {
          RESET OPTIONALITY;
      };
      ALTER PROPERTY title {
          RESET OPTIONALITY;
      };
  };
  ALTER TYPE default::skills {
      ALTER PROPERTY skill {
          RESET OPTIONALITY;
      };
  };
  ALTER TYPE default::social_media {
      ALTER PROPERTY platform {
          RESET OPTIONALITY;
      };
      ALTER PROPERTY url {
          RESET OPTIONALITY;
      };
  };
  ALTER TYPE default::work_experience {
      ALTER PROPERTY company {
          RESET OPTIONALITY;
      };
      ALTER PROPERTY designation {
          RESET OPTIONALITY;
      };
      ALTER PROPERTY joining_date {
          RESET OPTIONALITY;
      };
      ALTER PROPERTY worked_till {
          RESET OPTIONALITY;
      };
  };
};
