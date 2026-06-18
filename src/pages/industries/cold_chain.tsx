import { IndustryPage } from "../IndustryPage";
import { coldChainData } from "../data/coldChainData";
import { SEO } from "../../components/SEO"
import { coldChainMeta } from "../data/seoMeta";

export default function ColdChainPage() {
  return (
  <>
  <SEO
        
        description={coldChainMeta.description}
        keywords={coldChainMeta.keywords}
        canonical={coldChainMeta.canonical}
        ogImage={coldChainMeta.ogImage}
      />
  <IndustryPage data={coldChainData} />
  </>
  );
}