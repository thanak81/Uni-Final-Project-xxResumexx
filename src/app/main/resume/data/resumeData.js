import Template1Main from "../components/templatess/CVTemplate/AllTemplates/Template1/Template1Main";
import Template2Main from "../components/templatess/CVTemplate/AllTemplates/Template2/Template2Main";
import Template3Main from "../components/templatess/CVTemplate/AllTemplates/Template3/Template3Main";

const {
  default: Template1Styling,
} = require("../components/templatess/CVTemplate/AllTemplates/TemplateStyling/Template1Styling");
const {
  default: Template2Styling,
} = require("../components/templatess/CVTemplate/AllTemplates/TemplateStyling/Template2Styling");

  export const stylingData =  [
      {
        id: 1,
        title: "Template 1 Styling",
        styling: <Template1Styling />,
      },
      {
        id: 2,
        title: "Template 2 Styling",
        styling: <Template2Styling />,
      },
      {
        id: 3,
        title: "Template 3 Styling",
        styling: <Template2Styling />,
      },
    ]


    export const resumeTemplateData = [
        {
            id: 1,
            name: "Resume Template1",
            img: "/CV.png",
            uploadImg : true,
            template: <Template1Main />,
          },
          {
            id: 2,
            name: "Resume Template2",
            img: "/CV1.png",
            uploadImg : false,
            template: <Template2Main />,
          },
          {
            id: 3,
            name: "Resume Template3",
            img: "/Resume Template Img/ResumeTemplate3.jpg",
            uploadImg : false,
            template: <Template3Main />,
          },
    ]

