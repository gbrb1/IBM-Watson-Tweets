import { Injectable } from '@nestjs/common';

@Injectable()
export class TwitterService {
  getHello(): string {
    return 'Hello World!';
  }

  async getTweet(T: any) {
    const response = await T.get(
      'search/tweets',
      { q: 'covid19', count: 1000 },
      async function (err, data, response) {
        data.statuses.map((twitter) => {
          return twitter.text;
        });
      },
    );

    return response;
  }
}
