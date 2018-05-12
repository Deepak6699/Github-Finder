class Github{
    constructor(){
        this.client_id = '7fb7c09f857dac49f8b1';
        this.client_secret = 'b1372d24bc79b804c4d804c5e7457479a07b743f';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }


    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_pages=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return{
            profile,
            repos
        }
    }
}


