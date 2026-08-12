export const SITE_ORIGIN = 'https://www.johnfigueiredo.com';

/**
 * Canonical identifier for the John Figueiredo entity.
 *
 * The full Person node — name, sameAs[], subjectOf[], founder[], etc. — is
 * declared exactly once, in Layout.astro, and carries this @id. Every other
 * Person reference on the site (bio mainEntity, contact mainEntity, feed
 * author/publisher, venture founders) points at this @id via `personRef()`
 * rather than redeclaring a partial Person.
 *
 * Why it matters: an anonymous `{'@type': 'Person', name: 'John Figueiredo'}`
 * is a blank node. Nine of them across the site read as nine separate people
 * to a parser, each with a fraction of the entity's attributes. One @id with
 * nine references reads as one entity mentioned nine times — which is what
 * Knowledge Graph consolidation actually rewards.
 */
export const PERSON_ID = `${SITE_ORIGIN}/#person`;

/** A reference to the canonical Person entity, for use in any nested slot. */
export const personRef = () => ({ '@id': PERSON_ID });

/**
 * SISU Ventures is submitted to Google as one of John's official web profiles,
 * so its real domain — not the internal /ventures/ page — has to be the
 * Organization's `url`. The internal page is the mainEntityOfPage instead.
 */
export const SISU_VENTURES_URL = 'https://www.sisuventures.co/';
export const SISU_VENTURES_ID = `${SITE_ORIGIN}/ventures/sisu-ventures#organization`;
