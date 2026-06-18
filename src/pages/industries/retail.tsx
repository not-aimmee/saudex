import { IndustryPage } from "../IndustryPage";
import { retailWholesaleData } from "../data/retailWholesaleData";
import { SEO } from "../../components/SEO";
import { retailWholesaleMeta } from "../data/seoMeta";

export default function RetailPage() {
  return (
    <>
    <SEO
        title={retailWholesaleMeta.title}
        description={retailWholesaleMeta.description}
        keywords={retailWholesaleMeta.keywords}
        canonical={retailWholesaleMeta.canonical}
        ogImage={retailWholesaleMeta.ogImage}
      />
  <IndustryPage data={retailWholesaleData} />
  </>
  );
}