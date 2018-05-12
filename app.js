
const github = new Github;

const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup',(e) => {

    const userText = e.target.value;
    const ui = new UI;
    if(userText !== ''){
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                ui.showAlert('User doesnot exist','alert alert-danger');
            }else{
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    }else{
        //clear profile
        ui.clearProfile();
    }
}); 