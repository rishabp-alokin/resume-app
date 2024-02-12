CREATE MIGRATION m1yzwkbmkfz5vwy4fzqbxvtl463cybzrvbc6r6zrux5rqlb3vipzfq
    ONTO m1vqsjsskjuuk7bdvo4v7ypasw6nbstxc4vdfcyius2jbpmgk6xfja
{
  ALTER TYPE default::address {
      DROP PROPERTY current_location;
  };
};
