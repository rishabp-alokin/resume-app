CREATE MIGRATION m1vqsjsskjuuk7bdvo4v7ypasw6nbstxc4vdfcyius2jbpmgk6xfja
    ONTO m1w7xa6h4kxugkuwmdzehq3uiiftlepee3ataarjp6tiib3xybsj5a
{
  ALTER TYPE default::basic_details {
      ALTER LINK address {
          RESET CARDINALITY USING (SELECT
              .address 
          LIMIT
              1
          );
      };
  };
};
