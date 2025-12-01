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
      <Card className="h-full animate-pulse bg-slate-50 border-dashed">
        <CardHeader><div className="h-8 bg-slate-200 rounded w-2/3"></div></CardHeader>
        <CardContent><div className="h-40 bg-slate-200 rounded"></div></CardContent>
      </Card>
    );
  }

  if (!data) return (
    <div className="h-full flex items-center justify-center text-slate-400 border-2 border-dashed rounded-xl p-8 text-center">
      <p>Enter your profile to see investment matches.</p>
    </div>
  );

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <Card className="h-full shadow-lg border-t-4 border-t-emerald-600">
        <CardHeader className="bg-slate-50/50 pb-4">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-1 text-xs text-slate-500 uppercase tracking-wider mb-1">
                <MapPin className="w-3 h-3" /> Recommended Region
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">{data.province_name}</CardTitle>
            </div>
            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 text-lg">
              {data.match_score}% Match
            </Badge>
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6 space-y-6">
          {/* Leisure */}
          <div className="flex gap-4">
            <div className="mt-1 bg-blue-100 p-2 rounded-lg h-fit text-blue-600"><Palmtree className="w-5 h-5" /></div>
            <div>
              <h4 className="font-semibold text-slate-900">Lifestyle & Travel</h4>
              <p className="text-sm text-slate-600 mt-1">{data.reasoning_travel}</p>
            </div>
          </div>
          {/* Business */}
          <div className="flex gap-4">
            <div className="mt-1 bg-emerald-100 p-2 rounded-lg h-fit text-emerald-600"><TrendingUp className="w-5 h-5" /></div>
            <div>
              <h4 className="font-semibold text-slate-900">Economic Impact</h4>
              <p className="text-sm text-slate-600 mt-1">{data.reasoning_economic}</p>
            </div>
          </div>
          {/* Actions */}
          <div className="bg-slate-50 p-3 rounded-lg border">
            <h5 className="text-xs font-bold text-slate-500 uppercase mb-2">Next Steps</h5>
            <ul className="text-sm space-y-1">
              {data.suggested_actions.map((action: string, i: number) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {action}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-slate-900">Explore {data.province_name} <ArrowRight className="w-4 h-4 ml-2" /></Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}