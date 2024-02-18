import { supabase } from '../supabase.client'

export const insertNewUser = async user => {
	const { data, error } = await supabase.from('users').insert(user)
	if (data) return data
	if (error) return error
}
