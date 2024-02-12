CREATE MIGRATION m1n5ut6sl5k3bhavam3kan3skv2wqxdalur3yesk6opyt27k7d7uca
    ONTO m1awm5y757xrtukuqwewtnw2klkfx2bpourorw5uklaammgfskfjza
{
  ALTER TYPE default::social_media {
      DROP LINK basic_details;
  };
};
