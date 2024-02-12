CREATE MIGRATION m1w7xa6h4kxugkuwmdzehq3uiiftlepee3ataarjp6tiib3xybsj5a
    ONTO m1hwhggg6p7wlfnal72whqehwhw5677ngbhte55n6xxl4t3u57uktq
{
  ALTER TYPE default::basic_details {
      CREATE REQUIRED PROPERTY template_design_type: std::str {
          SET REQUIRED USING (<std::str>{});
      };
  };
};
