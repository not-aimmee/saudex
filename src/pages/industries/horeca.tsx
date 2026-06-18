import { IndustryPage } from "../IndustryPage";
import { horecaData } from "../data/horecaData";
import { SEO } from "../../components/SEO";
import { horecaMeta } from "../data/seoMeta";

export default function HorecaPage() {
  return (
    <>
    <SEO
        
        description={horecaMeta.description}
        keywords={horecaMeta.keywords}
        canonical={horecaMeta.canonical}
        ogImage={horecaMeta.ogImage}
      />
   <IndustryPage data={horecaData} />
   </>
  );
}