# Lucy Rogers Trip-Specific Website Product Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Define a productized offer for Lucy Rogers Tailormade Trips where each booked client receives a private, beautiful, trip-specific website that functions as proposal, itinerary, travel companion, and keepsake.

**Architecture:** Start from Lucy’s existing enquiry-led bespoke-travel workflow, then add a structured content pipeline that turns trip data into a branded microsite. The site should serve two phases: pre-booking (to help close the sale) and post-booking (to help deliver the trip).

**Tech Stack:** Product/workflow planning only for this document. Likely future options: Squarespace + custom embeds for light version, or dedicated static-site generator / CMS-backed microsite system for scalable version.

---

## Current context / research notes

**Sources checked**
- https://www.lucyrogerstailormadetrips.co.uk/
- https://www.lucyrogerstailormadetrips.co.uk/sitemap.xml
- Companies House record for `TAILORED TRIPS LTD` (company `16795642`)

**Observed business positioning**
- Brand: **Lucy Rogers Tailormade Trips**
- Messaging: bespoke, off-the-beaten-track, culturally immersive travel
- Audience implied by site: couples, families, curious travellers, experience-led travellers
- Site CTA is currently enquiry-based rather than interactive trip-based
- Contact form already captures: name, email, message, approximate budget, referral source
- FAQs signal operational flexibility: not luxury-only, no minimum duration, 3–6 months ideal planning window
- Trust layer includes InteleTravel affiliation and ABTA/ATOL wording

**Implication**
Lucy is already selling a highly personalised service. A trip-specific website is not a random add-on; it is a natural extension of the product she already promises.

---

# Product concept

## Core offer

For each qualified lead or booked customer, Lucy receives a **private trip website** for that exact journey.

The site can act as one or more of these:
1. **Proposal site** — used before booking to help close the sale
2. **Trip hub** — used after booking for itinerary, logistics, and recommendations
3. **In-trip companion** — used on the road for maps, timings, confirmations, local notes
4. **Keepsake** — preserved after travel as a memorable record of the journey

## Best positioning line

**“A beautifully designed private travel website for your exact journey — part proposal, part itinerary, part travel companion.”**

## Why this fits Lucy specifically

- Her current value is already in **curation**, not commodity inventory
- The customer is buying **confidence and taste**, not just flights/hotels
- A bespoke website makes the invisible planning work feel visible and premium
- It gives Lucy a distinctive sales asset compared with generic travel agents

---

# Recommended product tiers

## Tier 1: Proposal Lite
Use before booking.

**Contents**
- Hero section with trip title and mood
- “Why this trip is for you” summary
- Draft day-by-day outline
- 3–5 highlight experiences
- Hotel/area suggestions
- Indicative budget band
- Enquire / approve / request changes CTA

**Business outcome**
- Helps convert leads
- Makes Lucy’s thoughtfulness tangible early

## Tier 2: Full Trip Hub
Use after booking.

**Contents**
- Final itinerary by day
- Flight / transfer summary
- Stay details
- Reservation notes
- Packing/weather/currency/tipping notes
- Embedded maps
- Restaurant / bar / activity recommendations
- Emergency / support details
- PDF download fallback

**Business outcome**
- Improves delivery quality
- Reduces repeated WhatsApp/email questions

## Tier 3: Premium Storybook Trip Site
Use for higher-end or special-occasion travel.

**Contents**
- Everything in Full Trip Hub
- Immersive editorial design
- Photo-led destination sections
- Surprise moments / hidden gems
- Personal notes from Lucy
- Shareable private link for travel companions/family
- Post-trip gallery / memory archive

**Business outcome**
- Higher-margin upsell
- Strong differentiator and referral engine

---

# Demonstration workflow

This is the clearest end-to-end example of how the service would work.

## Phase 1: Lead capture
**Input from traveller**
- Destination ideas
- Dates / trip length
- Number of travellers
- Budget range
- Interests
- Pace / travel style
- Must-haves / no-gos
- Celebration / occasion if relevant

**How it enters the system**
- Existing Lucy site enquiry form
- Discovery call notes
- Follow-up questionnaire

**Output**
- Structured trip brief

## Phase 2: Trip design by Lucy
**Lucy does**
- Shapes routing and pacing
- Chooses candidate stays and experiences
- Identifies signature moments and local hooks
- Frames the emotional arc of the trip

**Output**
- Draft itinerary data
- Asset list: hotels, locations, copy, pricing bands, imagery

## Phase 3: Site generation kickoff
**Operational step**
The structured trip brief gets turned into a site draft using a repeatable template.

**Minimum required fields**
- Trip name
- Travellers’ first names
- Dates
- Destination(s)
- Overview copy
- Day-by-day blocks
- Key bookings
- Budget band
- FAQs / important notes
- Lucy personal intro / rationale for choices

**Output**
- Draft private microsite URL

## Phase 4: Proposal review
**Traveller sees**
- Beautiful branded trip page
- Suggested route and day flow
- Why Lucy chose these places
- Indicative stays and experiences
- Estimated cost range
- Button to approve / ask for revisions

**Business value**
This replaces or upgrades the usual PDF/long email. It makes the offer feel bespoke and memorable.

## Phase 5: Conversion and booking
Once the client approves, Lucy confirms suppliers and enriches the same site rather than starting over.

**Site gets upgraded with**
- Final timings
- Booking references
- Addresses
- Transfer instructions
- Dining/activity recommendations
- Maps and practical notes

**Output**
- Live trip hub becomes the delivery artifact

## Phase 6: Pre-departure and in-trip use
**Traveller uses site for**
- Quick daily check-ins
- Finding addresses and timings
- Sharing plans with partner/family
- Accessing support details
- Re-reading Lucy’s recommendations on the move

## Phase 7: Post-trip afterlife
Optional keepalive mode.

**Site can remain available as**
- Digital scrapbook
- Rebooking prompt
- Referral artifact
- Template source for future “similar trip” sales

---

# Suggested content model for each trip site

## Always-on sections
- Hero: trip name, dates, destination, mood line
- Why this trip / why Lucy chose it
- Quick facts: travellers, duration, season, pace, budget band
- Day-by-day itinerary
- Stays
- Signature experiences
- Practical info
- Maps / neighbourhoods
- Dining / drink / culture picks
- Contact / support

## Optional sections
- Packing list
- Children / family notes
- Accessibility notes
- Anniversary / honeymoon notes
- Weather watch
- Visa / entry reminders
- Journal / gallery after travel

---

# UX principles for the product

1. **Private by default**
   - Unlisted/private link, not public SEO content
2. **Mobile-first**
   - Must work beautifully on phones during travel
3. **Image-led**
   - Strong destination imagery, minimal wall-of-text
4. **Fast scanning**
   - Each day and booking should be quickly findable
5. **Human tone**
   - Lucy’s personality and reasoning should come through
6. **Layered detail**
   - Top-level overview with tap-for-more details
7. **Printable fallback**
   - PDF export or print stylesheet for resilience

---

# Suggested operating model for Lucy

## Option A: Use it as a sales differentiator only
- Only create proposal sites for high-value leads
- Good low-risk entry point
- Best if she wants to test conversion uplift first

## Option B: Include it for every booked trip above threshold
- Example threshold: trips above a certain margin or spend
- Better consistency and brand story

## Option C: Tiered upsell
- Standard planning service stays as-is
- Premium planning package includes the private trip website
- Best monetisation path

**Recommendation:** start with **Option A or C**, not B.

---

# Risks and tradeoffs

## Risks
- Can become labour-intensive if every site is handcrafted from scratch
- Content collection may bottleneck Lucy if booking data is scattered across email/WhatsApp
- If suppliers change often, site upkeep can become admin-heavy
- Privacy matters if booking refs and personal details are shown

## Tradeoffs
- A very polished site increases perceived value but adds production time
- A simpler template is easier to scale but less magical
- Proposal-stage sites need careful wording so draft content is not mistaken for final confirmations

---

# MVP recommendation

Start with a **proposal-to-itinerary hybrid MVP**.

## MVP scope
- One reusable branded template
- Private link per trip
- 6 core sections only:
  1. Hero
  2. Why this trip
  3. Day-by-day outline
  4. Where you’ll stay
  5. Signature moments
  6. Practical notes / next steps
- One CTA block: approve / revise / ask a question
- One upgrade path to final itinerary after booking

## Success criteria
- Lucy can produce a first version in under 45–60 minutes once content is ready
- Client immediately understands “this trip was designed for me”
- Fewer scattered clarification messages
- Stronger sales close rate on suitable leads

---

# Concrete demonstration scenario

## Example
A couple enquires about a 10-night Argentina trip with wine, landscape, culture, and a moderate-luxury budget.

### Old workflow
- Enquiry form
- Discovery call
- Long email or PDF with ideas
- Back-and-forth changes in email/WhatsApp
- Separate final itinerary docs later

### New workflow
- Enquiry form
- Discovery call
- Lucy assembles the trip brief
- Private site appears: `argentina-for-sam-and-tom`
- Couple reviews the route, hotels, mood, and rationale in one place
- They request 2 edits directly against the site/proposal
- Lucy updates same site
- They approve
- Site becomes final itinerary hub
- During trip they reopen the same link on mobile

**Key value:** one evolving artifact instead of fragmented documents.

---

# Open questions to answer before building

1. Is the main commercial goal **conversion**, **service quality**, or **premium upsell**?
2. Does Lucy want these sites to be **private only** or also usable as a portfolio format?
3. How much of the trip data is already structured vs spread across messages?
4. Does she want travellers to submit revision requests inside the site?
5. Should this be a manual concierge tool first, or a scalable semi-automated system?
6. Is brand fit better as subtle luxury, adventurous editorial, or warm personal concierge?

---

# Recommended next step

Build a single **demonstration trip microsite concept** using a fictional but realistic Lucy-style itinerary. The demo should show:
- proposal mode
- client-specific personalisation
- itinerary flow
- practical mobile-friendly use
- how the same site evolves after booking

That demo will make the workflow obvious faster than a written pitch alone.
