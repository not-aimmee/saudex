import { IndustryPage } from "../IndustryPage";
import { fmcgData } from "../data/fmcgData";
import { SEO } from "../../components/SEO"
import { fmcgMeta } from "../data/seoMeta";

export default function FMCGPage() {
  return(
    <>
    <SEO
        
        description={fmcgMeta.description}
        keywords={fmcgMeta.keywords}
        canonical={fmcgMeta.canonical}
        ogImage={fmcgMeta.ogImage}
      />
   <IndustryPage data={fmcgData} />
   </>
  );
}