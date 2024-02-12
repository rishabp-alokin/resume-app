CREATE MIGRATION m17cnbl6ez4x5ibus5a2pq4k4btonly74uftvv5hcohc2zx2auij6q
    ONTO m1yzwkbmkfz5vwy4fzqbxvtl463cybzrvbc6r6zrux5rqlb3vipzfq
{
  ALTER TYPE default::basic_details {
      ALTER PROPERTY template_design_type {
          RESET OPTIONALITY;
      };
  };
};
