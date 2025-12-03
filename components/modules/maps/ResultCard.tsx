'use client';
import { motion } from 'framer-motion';
import { MapPin, TrendingUp, Palmtree, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function ResultCard({ data, isLoading }: { data: any, isLoading: boolean }) {
  
  if (isLoading) {
    return (
      <Card className="h-full animate-pulse bg-muted/50 border-dashed">
        <CardHeader><div className="h-8 bg-muted rounded w-2/3"></div></CardHeader>
        <CardContent><div className="h-40 bg-muted rounded"></div></CardContent>
      </Card>
    );
  }

  if (!data) return (
    <div className="h-full flex items-center justify-center text-muted-foreground border-2 border-dashed border-muted rounded-xl p-8 text-center">
      <p>Enter your profile to see investment matches.</p>
    </div>
  );

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="h-full">
      <Card className="h-full shadow-lg border-t-4 border-t-primary bg-card">
        <CardHeader className="bg-muted/20 pb-4">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground uppercase tracking-wider mb-1">
                <MapPin className="w-3 h-3" /> Recommended Region
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">{data.province_name}</CardTitle>
            </div>
            <Badge variant="secondary" className="text-lg">
              {data.match_score}% Match
            </Badge>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6 space-y-6">
          {/* Leisure */}
          <div className="flex gap-4">
            <div className="mt-1 bg-primary/10 p-2 rounded-lg h-fit text-primary"><Palmtree className="w-5 h-5" /></div>
            <div>
              <h4 className="font-semibold text-foreground">Lifestyle & Travel</h4>
              <p className="text-sm text-muted-foreground mt-1">{data.reasoning_travel}</p>
            </div>
          </div>
          {/* Business */}
          <div className="flex gap-4">
            <div className="mt-1 bg-primary/10 p-2 rounded-lg h-fit text-primary"><TrendingUp className="w-5 h-5" /></div>
            <div>
              <h4 className="font-semibold text-foreground">Economic Impact</h4>
              <p className="text-sm text-muted-foreground mt-1">{data.reasoning_economic}</p>
            </div>
          </div>
          {/* Actions */}
          <div className="bg-muted/30 p-3 rounded-lg border border-border">
            <h5 className="text-xs font-bold text-muted-foreground uppercase mb-2">Next Steps</h5>
            <ul className="text-sm space-y-1">
              {data.suggested_actions.map((action: string, i: number) => (
                <li key={i} className="flex items-center gap-2 text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {action}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Explore {data.province_name} <ArrowRight className="w-4 h-4 ml-2" /></Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}