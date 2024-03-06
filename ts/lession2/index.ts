{
  type educationType = {
    university: string;
    major: string;
    year: number;
    GPA: number;
  }

  type projectType = {
    id: number;
    name: string;
    description: string;
  }

  type socialLinkType = {
    id: number;
    name: string;
    link: string;
  }

  type myCVType = {
    fullName: string;
    birthDay: string;
    address: string;
    email: string;
    bio: string;
    skills: string[];
    isMarried: boolean;
    education: educationType;
    project: projectType[];
    socialLinks: socialLinkType[];
  }

  const myCV = {
    fullName: "Nguyễn Minh Hoàng",
    birthDay: "1999-12-20",
    address: "Bắc Giang",
    email: "hoangnm62@fpt.edu.vn",
    bio: "Còn thở còn gỡ!",
    skills: ["HTML", "CSS", "JS", "ReactJS", "NodeJS", "MongoDB"],
    isMarried: true,
    education: {
      university: "FPT University",
      major: "Software Engineering",
      year: 2020,
      GPA: 3.2,
    },
    projects: [
      {
        id: 1,
        name: "E-commerce website",
        description: "Build a website for selling clothes",
      },

      {
        id: 1,
        name: "E-commerce website",
        description: "Build a website for selling clothes",
        //  Mô tả: "Xây dựng một trang web để bán quần áo",
      },
    ],
    socialLinks: [
      {
        id: 1,
        name: "facebook",
        link: "https://facebook.com/hoangnm62",
      },
      { id: 2, name: "github", link: "https://github.com/hoangnm-ndm" },
    ],
  };

  console.log(myInfo);
}
