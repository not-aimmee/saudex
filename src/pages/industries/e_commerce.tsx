import { IndustryPage } from "../IndustryPage";
import { ecommerceData } from "../data/ecommerceData";
import { SEO } from "../../components/SEO"
import { ecommerceMeta } from "../data/seoMeta";

export default function ECommercePage() {
  return (
    <>
    <SEO
        title={ecommerceMeta.title}
        description={ecommerceMeta.description}
        keywords={ecommerceMeta.keywords}
        canonical={ecommerceMeta.canonical}
        ogImage={ecommerceMeta.ogImage}
      />
  <IndustryPage data={ecommerceData} />
  </>
  );
}