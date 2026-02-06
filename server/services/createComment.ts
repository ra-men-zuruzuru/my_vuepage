
interface CommentData {
    userName: string;
    comment: string;
}

interface CommentResponse {
    success: boolean;
    message: string;
    data?: {
        id: string;
        userName: string;
        comment: string;
        createdAt: string;
    };
}

// コメント作成サービス
export async function createComment(commentData: CommentData): Promise<CommentResponse> {
    try {
        // ここでは簡単な例として、受け取ったデータを加工して返します
        // 実際のアプリケーションでは、データベースに保存する処理を追加します

        const newComment = {
            id: Math.random().toString(36).substring(2, 9), // ランダムなID生成
            userName: commentData.userName,
            comment: commentData.comment,
            createdAt: new Date().toISOString(),
        };

        console.log('Comment created:', newComment);

        return {
            success: true,
            message: 'Comment created successfully',
            data: newComment,
        };
    } catch (error) {
        console.error('createComment service error:', error);
        throw error;
    }
}
