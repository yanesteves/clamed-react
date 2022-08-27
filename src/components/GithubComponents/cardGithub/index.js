import './style.css';

export default function CardGithub({ value }) {
    return (
        <div className='github-card'>
            <div>
                <img alt={'Foto de '+ value.login} src={value.avatar_url} />
                
            </div>

            <div className='d-block'>
                <span className='name-user'>@{value.login}</span>
                <span className='nickuser text-muted'>{value.url}</span>
            </div>

        </div>
    )
}