import base64

class DecodeEncodeUtils:

    @staticmethod
    def get_avatar_base64(avatar):
        if avatar:
            with avatar.open('rb') as f:
                return base64.b64encode(f.read()).decode('utf-8')
        return None