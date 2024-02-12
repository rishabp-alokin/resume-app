CREATE MIGRATION m1hwhggg6p7wlfnal72whqehwhw5677ngbhte55n6xxl4t3u57uktq
    ONTO m1re3syymr2w7faeqvzim6jj2ib6aetavg72xl6nisggjznlwvwbua
{
  ALTER TYPE default::basic_details {
      CREATE MULTI LINK address: default::address;
      CREATE MULTI LINK certifications: default::certifications;
      CREATE MULTI LINK education: default::education;
      CREATE MULTI LINK languages: default::languages;
      CREATE MULTI LINK projects: default::projects;
      CREATE MULTI LINK skills: default::skills;
      CREATE MULTI LINK social_media: default::social_media;
      CREATE MULTI LINK work_experience: default::work_experience;
  };
};
