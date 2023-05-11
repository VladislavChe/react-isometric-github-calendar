
import './GitHubActivityBlock.css';
function GitHubActivityBlock() {

    return (
        <div className='gitHubActivityBlock'>
            <div className="container">
                <h2 className='gitHubActivityBlock__title'>GitHub активность</h2>
                <ul className="gitHubActivityBlock__progressList">
                    <li><span>992</span><p>вкладов в году</p></li>
                    <li><span>18</span><p>прошлая неделя</p></li>
                    <li><span>27</span><p>эта неделя</p></li>
                </ul>
            </div>
        </div>
    );
}

export default GitHubActivityBlock