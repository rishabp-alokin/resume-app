CREATE MIGRATION m1awm5y757xrtukuqwewtnw2klkfx2bpourorw5uklaammgfskfjza
    ONTO m1xpg7yex5anne5xnbof5slvbi4jsjxfz7x7ecitsqj5d6inw6vu5a
{
  ALTER TYPE default::social_media {
      CREATE LINK basic_details: default::basic_details;
  };
};
