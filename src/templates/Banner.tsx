import Link from "next/link";

import { Button } from "../button/Button";
import { CTABanner } from "../cta/CTABanner";
import { Section } from "../layout/Section";
import { Wave } from "./Wave";

const Banner = () => (
  <Section>
    <CTABanner
      title="Building the Future of Summer Stage"
      subtitle="Growing strong for the next 46+ years"
      button={
        <Link href="https://www.gofundme.com/f/ud-summer-stage-continue-the-magic">
          <a>
            <Button>Donate Now</Button>
          </a>
        </Link>
      }
    />
    <Wave />
  </Section>
);

export { Banner };
