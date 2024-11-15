import PocketBase from 'pocketbase'
import { type TypedPocketBase, type UsersResponse } from './pocketbase-types'
import { ref } from 'vue'

// Utilisez l'URL de l'environnement
export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase

// Référence de l'utilisateur connecté
export const user = ref<UsersResponse | null>(null)
pb.authStore.onChange((token, model) => {
  user.value = model as UsersResponse
}, true)

// Déconnexion
export function logout() {
  pb.authStore.clear()
}

// Authentification avec GitHub
export async function loginWithGitHub() {
  const authData = await pb.collection('users').authWithOAuth2({ provider: 'github' })
  console.log('loginWithGitHub authData', authData)
}

// Authentification avec Google
export async function loginWithGoogle() {
  const authData = await pb.collection('users').authWithOAuth2({ provider: 'google' })
  console.log('loginWithGoogle authData', authData)
}

// Récupération de tous les projets avec les compétences liées
export async function fetchProjects() {
  try {
    const projects = await pb.collection('projets').getFullList({
      expand: 'competences' // Expande la relation avec les compétences
    })
    console.log('Projects:', projects)
    return projects
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

// Fonction pour récupérer les compétences
export async function fetchCompetences() {
  try {
    const competences = await pb.collection('competences').getFullList()
    return competences
  } catch (error) {
    console.error('Error fetching competences:', error)
    return []
  }
}

// Fonction pour récupérer les logiciels
export async function fetchLogiciels() {
  try {
    const logiciels = await pb.collection('logiciels').getFullList()
    return logiciels
  } catch (error) {
    console.error('Error fetching logiciels:', error)
    return []
  }
}

// Récupération d'un projet spécifique par ID
export async function fetchProjectById(id: string) {
  try {
    const response = await fetch(`http://127.0.0.1:8090/api/projets/${id}`) // Remplace avec l'API que tu utilises
    if (!response.ok) {
      throw new Error('Erreur de chargement du projet')
    }
    const data = await response.json()
    return data // Retourne les données du projet
  } catch (error) {
    console.error('Erreur:', error)
    return null // Retourne null en cas d'erreur
  }
}
