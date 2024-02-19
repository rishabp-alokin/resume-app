module default {
  type basic_details {
    required name: str;
    required email: str;
    required phone: str;
    required designation: str;
    required summary: str;
    required template_design_type: str;
    multi social_media: social_media {
      on source delete delete target;
    };
    address: address {
      on source delete delete target;
    };
    multi education: education {
      on source delete delete target;
    };
    multi work_experience: work_experience {
      on source delete delete target;
    };
    skills: skills {
      on source delete delete target;
    };
    multi projects: projects {
      on source delete delete target;
    };
    multi certifications: certifications {
      on source delete delete target;
    };
    multi languages: languages {
      on source delete delete target;
    };
  }

  type address {
    address: str;
    city: str;
    state: str;
    postal_code: str;
    country: str;
  }

  type education {
    institution: str;
    course: str;
    passout_year: str;
    marks: str;
  }

  type work_experience {
    company: str;
    designation: str;
    joining_date: str;
    worked_till: str;
  }

  type skills {
    skills: str;
  }

  type projects{
    title: str;
    description: str;
  }

  type certifications {
    certification_name: str;
    certification_url: str;
  }

  type languages {
    language: str;
    proficiency: str;
  }

  type social_media {
    platform: str;
    url: str;
  }
}
