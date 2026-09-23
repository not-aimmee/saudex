import { IndustryPage } from "../IndustryPage";
import { agriCommoditiesData } from "../data/agriculture";
import { SEO } from "../../components/SEO"
import { agriCommoditiesMeta } from "../data/seoMeta";

export default function AgriPage() {
  return (
  <>
  <SEO
        
        description={agriCommoditiesMeta.description}
        keywords={agriCommoditiesMeta.keywords}
        canonical={agriCommoditiesMeta.canonical}
        ogImage={agriCommoditiesMeta.ogImage}
      />
  <IndustryPage data={agriCommoditiesData} />
  </>
  );
}