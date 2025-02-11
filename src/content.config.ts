import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders'

const films = defineCollection({
    loader: glob({base: "src/data/films", pattern: "**/*.md"}),
    schema: z.object({
        titre: z.string(),
        date_sortie: z.date(),
        synopsis: z.string(),
        langue: z.string(),
        duree: z.number(),
    })
})

const personnes = defineCollection({
  loader: glob({ base: "src/data/personnes", pattern: "**/*.md" }),
  schema: z.object({
    nom: z.string(),
    dateNaissance: z.date(),
    dateDeces: z.date().optional(),
    nationalite: z.string(),
    lieu_naissance: z.string(),
    profession: z.array(z.enum(["Acteur", "Réalisateur", "Scénariste", "Compositeur", "Producteur"])).optional(),
  }),
});

export const collections = { personnes, films }